const Library = {
  circuits: [
    { id: 'lib-serie', nom: 'Circuit série', description: 'Pile + 2 résistances en série', categorie: 'Bases',
      circuit: {
        components: [
          { type: 'battery', x: 100, y: 150, value: 12 },
          { type: 'resistor', x: 250, y: 150, value: 100 },
          { type: 'resistor', x: 400, y: 150, value: 200 }
        ],
        connections: [
          { from: 0, fromTerm: 0, to: 1, toTerm: 0 },
          { from: 1, fromTerm: 1, to: 2, toTerm: 0 },
          { from: 2, fromTerm: 1, to: 0, toTerm: 1 }
        ]
      }
    },
    { id: 'lib-parallele', nom: 'Circuit parallèle', description: 'Pile + 2 résistances en parallèle', categorie: 'Bases',
      circuit: {
        components: [
          { type: 'battery', x: 100, y: 200, value: 12 },
          { type: 'resistor', x: 300, y: 100, value: 100 },
          { type: 'resistor', x: 300, y: 300, value: 100 }
        ],
        connections: [
          { from: 0, fromTerm: 0, to: 1, toTerm: 0 },
          { from: 0, fromTerm: 0, to: 2, toTerm: 0 },
          { from: 1, fromTerm: 1, to: 0, toTerm: 1 },
          { from: 2, fromTerm: 1, to: 0, toTerm: 1 }
        ]
      }
    },
    { id: 'lib-lampe', nom: 'Circuit avec lampe', description: 'Pile + interrupteur + lampe', categorie: 'Bases',
      circuit: {
        components: [
          { type: 'battery', x: 100, y: 200, value: 9 },
          { type: 'switch', x: 250, y: 200, value: 1 },
          { type: 'lamp', x: 400, y: 200, value: 50 }
        ],
        connections: [
          { from: 0, fromTerm: 0, to: 1, toTerm: 0 },
          { from: 1, fromTerm: 1, to: 2, toTerm: 0 },
          { from: 2, fromTerm: 1, to: 0, toTerm: 1 }
        ]
      }
    }
  ],

  load(circuitId) {
    const lib = this.circuits.find(c => c.id === circuitId);
    if (!lib) return;
    Simulateur.effacer();
    lib.circuit.components.forEach(data => {
      Simulateur.addComponentSilent(ComponentFactory.create(data.type, data.x, data.y, data.value));
    });
    const comps = Simulateur.components;
    lib.circuit.connections.forEach(conn => {
      const fromComp = comps[conn.from];
      const toComp = comps[conn.to];
      if (fromComp && toComp) {
        Simulateur.connections.push({
          from: fromComp.id, fromTerm: conn.fromTerm,
          to: toComp.id, toTerm: conn.toTerm,
          color: '#3b82f6'
        });
      }
    });
    Connections.redraw();
    Simulateur.updateStats();
    Notify.success(`Circuit chargé : ${lib.nom}`);
  },

  open() {
    let modal = document.getElementById('libraryModal');
    if (modal) { modal.style.display = 'flex'; return; }

    modal = document.createElement('div');
    modal.id = 'libraryModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-box modal-large">
        <div class="modal-header">
          <h3>Bibliothèque de circuits</h3>
          <button class="modal-close" onclick="document.getElementById('libraryModal').style.display='none'">×</button>
        </div>
        <div class="modal-body">
          ${this.renderCategories()}
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  renderCategories() {
    const categories = {};
    this.circuits.forEach(c => {
      if (!categories[c.categorie]) categories[c.categorie] = [];
      categories[c.categorie].push(c);
    });

    return Object.entries(categories).map(([cat, circuits]) => `
      <div class="library-category">
        <h4>${cat}</h4>
        <div class="library-grid">
          ${circuits.map(c => `
            <button class="library-item" onclick="Library.load('${c.id}'); document.getElementById('libraryModal').style.display='none';">
              <div class="library-item-icon">${Icons.lightning}</div>
              <div class="library-item-info">
                <div class="library-item-title">${c.nom}</div>
                <div class="library-item-desc">${c.description}</div>
              </div>
            </button>
          `).join('')}
        </div>
      </div>
    `).join('');
  }
};