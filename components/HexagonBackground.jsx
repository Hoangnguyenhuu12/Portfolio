import React, { useEffect, useRef } from 'react';

/**
 * CẤU HÌNH TÙY CHỈNH (CONFIG)
 * Tùy chỉnh kích thước, bán kính ảnh hưởng chuột, độ sâu chìm và màu sắc
 */
const HEX_CONFIG = {
  // Bán kính khối lục giác (pixel)
  hexRadius: 28,

  // Bán kính vùng ảnh hưởng của chuột (pixel)
  // 190px giúp ô ngay dưới chuột chìm rõ nhất, các ô xung quanh chìm nhẹ và mờ dần ra xa
  influenceRadius: 190,

  // Tỉ lệ co đáy khi chìm tối đa (0.15 - 0.25)
  maxDepthRatio: 0.20,

  // Tốc độ lún và nảy lại của các khối (0.08: mượt mà - 0.2: tức thì)
  springSpeed: 0.14,

  // Chế độ nền đen (Dark Mode - phong cách lưới kim loại công nghệ)
  dark: {
    bg: '#000000',
    baseStroke: 'rgba(255, 255, 255, 0.14)',
    activeStroke: 'rgba(255, 255, 255, 0.85)',
    innerFloor: '#000000',
    wallShadow: 'rgba(0, 0, 0, 0.8)',
    wallHighlight: 'rgba(255, 255, 255, 0.16)'
  },

  // Chế độ nền trắng (Light Mode - mượt mà, không bị sọc xám gắt xung quanh)
  light: {
    bg: '#ffffff',
    baseStroke: 'rgba(0, 0, 0, 0.10)',
    activeStroke: 'rgba(0, 0, 0, 0.55)',
    innerFloor: '#ffffff',
    wallShadow: 'rgba(0, 0, 0, 0.09)',
    wallHighlight: '#ffffff'
  }
};

const HexagonBackground = ({ isDark = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Tọa độ chuột thực tế trên màn hình
    const mouse = {
      x: -9999,
      y: -9999,
      isActive: false
    };

    // Mảng lưu danh sách các khối lục giác phủ kín toàn màn hình
    let hexGrid = [];

    const r = HEX_CONFIG.hexRadius;
    const w = Math.sqrt(3) * r;
    const hSpacing = 1.5 * r;

    // Xây dựng lại lưới lục giác khi resize màn hình
    const buildGrid = () => {
      hexGrid = [];
      const cols = Math.ceil(width / w) + 2;
      const rows = Math.ceil(height / hSpacing) + 2;

      for (let row = -1; row < rows; row++) {
        const cy = row * hSpacing;
        const colShift = (row % 2 !== 0) ? w / 2 : 0;

        for (let col = -1; col < cols; col++) {
          const cx = col * w + colShift;
          hexGrid.push({
            cx,
            cy,
            currentSink: 0 // Độ lún hiện tại (0: phẳng, 1: chìm tối đa)
          });
        }
      }
    };

    // Tự động điều chỉnh kích thước Canvas (hỗ trợ Retina / HiDPI)
    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      buildGrid();
    };

    // Lắng nghe di chuyển chuột
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    handleResize();

    // Tính toán góc của lục giác đều (Pointy-topped)
    // 6 đỉnh: đỉnh trên cùng tại -90 độ, các đỉnh cách nhau 60 độ
    const angles = [];
    for (let k = 0; k < 6; k++) {
      angles.push(-Math.PI / 2 + k * (Math.PI / 3));
    }

    // Vòng lặp Render 60 FPS
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const theme = isDark ? HEX_CONFIG.dark : HEX_CONFIG.light;
      const R = HEX_CONFIG.influenceRadius;

      // Nền chính phủ toàn màn hình
      ctx.fillStyle = theme.bg;
      ctx.fillRect(0, 0, width, height);

      // Duyệt qua từng khối lục giác trong toàn bộ màn hình
      for (let i = 0; i < hexGrid.length; i++) {
        const hex = hexGrid[i];

        // Tính khoảng cách từ tâm ô lục giác tới chuột
        let targetSink = 0;
        if (mouse.isActive) {
          const dx = hex.cx - mouse.x;
          const dy = hex.cy - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < R) {
            // Ô ngay dưới chuột (dist ~ 0) chìm rõ nhất (~1)
            // Càng ra xa chìm nhẹ (bậc 2.2 cho độ suy giảm tự nhiên)
            const progress = 1 - dist / R;
            targetSink = Math.pow(progress, 2.2);
          }
        }

        // Nội suy mượt mà độ lún: khi chuột rời đi, ô nảy hồi phục êm ái
        hex.currentSink += (targetSink - hex.currentSink) * HEX_CONFIG.springSpeed;
        const sink = hex.currentSink;

        // Tính tọa độ 6 đỉnh ngoài (Outer Hexagon)
        const outerV = [];
        for (let k = 0; k < 6; k++) {
          outerV.push({
            x: hex.cx + r * Math.cos(angles[k]),
            y: hex.cy + r * Math.sin(angles[k])
          });
        }

        if (sink < 0.01) {
          // ================= TRẠNG THÁI NGHỈ (PHẲNG) =================
          // Vẽ lưới viền mỏng thanh thoát trên toàn màn hình
          ctx.beginPath();
          ctx.moveTo(outerV[0].x, outerV[0].y);
          for (let k = 1; k < 6; k++) {
            ctx.lineTo(outerV[k].x, outerV[k].y);
          }
          ctx.closePath();
          ctx.strokeStyle = theme.baseStroke;
          ctx.lineWidth = 1;
          ctx.stroke();

        } else {
          // ================= TRẠNG THÁI CHÌM 3D (ACTIVE SUNKEN TILE) =================
          // Bán kính đáy chìm nhỏ lại theo độ sâu
          const innerR = r * (1 - sink * HEX_CONFIG.maxDepthRatio);
          const innerV = [];
          for (let k = 0; k < 6; k++) {
            innerV.push({
              x: hex.cx + innerR * Math.cos(angles[k]),
              y: hex.cy + innerR * Math.sin(angles[k])
            });
          }

          // 1. Vẽ các vách nghiêng 3D (Bevel Walls) nối từ viền ngoài xuống đáy chìm
          for (let k = 0; k < 6; k++) {
            const next = (k + 1) % 6;
            ctx.beginPath();
            ctx.moveTo(outerV[k].x, outerV[k].y);
            ctx.lineTo(outerV[next].x, outerV[next].y);
            ctx.lineTo(innerV[next].x, innerV[next].y);
            ctx.lineTo(innerV[k].x, innerV[k].y);
            ctx.closePath();

            // Đổ bóng theo góc chiếu sáng: vách trên/trái đổ bóng sâu, vách dưới đón sáng nhẹ
            if (k === 0 || k === 4 || k === 5) {
              ctx.fillStyle = isDark
                ? theme.wallShadow
                : `rgba(0, 0, 0, ${sink * 0.09})`;
            } else {
              ctx.fillStyle = isDark
                ? `rgba(255, 255, 255, ${sink * 0.16})`
                : '#ffffff';
            }
            ctx.fill();
          }

          // 2. Vẽ mặt đáy chìm (Inner Floor)
          ctx.beginPath();
          ctx.moveTo(innerV[0].x, innerV[0].y);
          for (let k = 1; k < 6; k++) {
            ctx.lineTo(innerV[k].x, innerV[k].y);
          }
          ctx.closePath();
          ctx.fillStyle = theme.innerFloor;
          ctx.fill();

          // Viền đáy chìm mờ
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)';
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // 3. Viền miệng khối ngoài cùng: sáng rõ rực lên theo độ lún
          ctx.beginPath();
          ctx.moveTo(outerV[0].x, outerV[0].y);
          for (let k = 1; k < 6; k++) {
            ctx.lineTo(outerV[k].x, outerV[k].y);
          }
          ctx.closePath();

          // Đổi màu viền theo độ sâu: chìm càng rõ thì viền càng sáng/đậm nét
          if (isDark) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.14 + sink * 0.71})`;
          } else {
            ctx.strokeStyle = `rgba(0, 0, 0, ${0.10 + sink * 0.45})`;
          }
          ctx.lineWidth = 1 + sink * 0.6;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDark]);

  return (
    <canvas
      id="hex-bg"
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default HexagonBackground;
