const Notify = {
  container: null,

  init() {
    if (this.container) return;
    this.container = document.createElement('div');
    this.container.className = 'toast-container';
    this.container.style.cssText = 'position:fixed;top:20px;right:20px;z-index:10000;display:flex;flex-direction:column;gap:10px;pointer-events:none;max-width:380px;';
    document.body.appendChild(this.container);
  },

  show(message, type = 'info', duration = 3000) {
    this.init();
    const config = {
      info: { color: '#3b82f6', icon: Icons.info },
      success: { color: '#3fb950', icon: Icons.check },
      warning: { color: '#d29922', icon: Icons.warning },
      error: { color: '#f85149', icon: Icons.close }
    };
    const cfg = config[type] || config.info;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `display:flex;align-items:center;gap:12px;padding:14px 18px;background:#161b22;border:1px solid #30363d;border-left:3px solid ${cfg.color};border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.4);font-family:'Inter',system-ui,sans-serif;font-size:14px;color:#e6edf3;pointer-events:auto;animation:toastSlide 250ms ease;line-height:1.4;`;
    toast.innerHTML = `<span style="width:18px;height:18px;flex-shrink:0;color:${cfg.color};display:flex;align-items:center;justify-content:center;">${cfg.icon}</span><span style="flex:1;">${message}</span>`;

    this.container.appendChild(toast);
    if (duration > 0) setTimeout(() => this.dismiss(toast), duration);
    return toast;
  },

  dismiss(toast) {
    toast.style.transition = 'all 250ms';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    setTimeout(() => toast.remove(), 250);
  },

  success(msg, d) { return this.show(msg, 'success', d); },
  error(msg, d) { return this.show(msg, 'error', d); },
  warning(msg, d) { return this.show(msg, 'warning', d); },
  info(msg, d) { return this.show(msg, 'info', d); }
};

const styleNotify = document.createElement('style');
styleNotify.textContent = '@keyframes toastSlide{from{opacity:0;transform:translateX(20px);}to{opacity:1;transform:translateX(0);}}';
document.head.appendChild(styleNotify);