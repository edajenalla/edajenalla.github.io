const Exporter = {
  async exportPNG() {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;
    if (typeof html2canvas === 'undefined') { Notify.error('html2canvas non chargé'); return; }
    try {
      const result = await html2canvas(canvas, { backgroundColor: '#0d1117', scale: 2 });
      const link = document.createElement('a');
      link.download = `circuit_${Date.now()}.png`;
      link.href = result.toDataURL('image/png');
      link.click();
      Notify.success('Image exportée');
    } catch (e) { Notify.error('Erreur export'); }
  },

  exportJSON() {
    if (!Simulateur.components.length) { Notify.warning('Rien à exporter'); return; }
    const data = {
      version: '1.0',
      date: new Date().toISOString(),
      components: Simulateur.components.map(c => c.toJSON()),
      connections: Simulateur.connections
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.download = `circuit_${Date.now()}.json`;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
    Notify.success('Circuit exporté');
  },

  importJSON() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          Simulateur.effacer();
          data.components.forEach(c => Simulateur.addComponentSilent(Component.fromJSON(c)));
          Simulateur.connections = data.connections || [];
          Connections.redraw();
          Simulateur.updateStats();
          Notify.success('Circuit importé');
        } catch (err) { Notify.error('JSON invalide'); }
      };
      reader.readAsText(file);
    };
    input.click();
  }
};