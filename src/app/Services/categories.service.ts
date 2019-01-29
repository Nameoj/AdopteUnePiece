import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private route: Router) { }

  filterCounter = 0;
  filterActive = false;
  piece: string;

  mockMotoCategories = {
    categories: [{
      name: 'PARTIE CYCLE',
      sousCategories: [{
        name: 'Cadre',
        sousSousCategories: [{
          name: 'Cadre'
        },
        {
          name: 'Araignée avant'
        },
        {
          name: 'Boucle arrière'
        },
        {
          name: 'Divers cadre'
        }]
      },
      {
        name: 'Fourche',
        sousSousCategories: [{
          name: 'Fourche complète'
        },
        {
          name: 'Tube de fourche gauche'
        },
        {
          name: 'Tube de fourche droit'
        },
        {
          name: 'Té supérieur'
        },
        {
          name: 'Té inférieur'
        }]
      },
      {
        name: 'Bras oscillant',
        sousSousCategories: [{
          name: 'Bras oscillant complet'
        },
        {
          name: 'Axe de bras oscillant'
        },
        {
          name: 'Tendeur de chaîne'
        }]
      },
      {
        name: 'Béquille',
        sousSousCategories: [{
          name: 'Béquille latérale'
        },
        {
          name: 'Béquille centrale'
        }]
      },
      {
        name: 'Amortisseur arrière',
        sousSousCategories: [{
          name: 'Amortisseur complet'
        },
        {
          name: 'Biellette d\'amortisseur'
        }]
      },
      {
        name: 'Guidon',
        sousSousCategories: [{
          name: 'Guidon'
        },
        {
          name: 'Rétroviseur gauche'
        },
        {
          name: 'Rétroviseur droit'
        },
        {
          name: 'Poignée de gaz'
        },
        {
          name: 'Cocotte d\'embrayage'
        },
        {
          name: 'Levier d\'embrayage'
        },
        {
          name: 'Levier de frein'
        },
        {
          name: 'Embout de guidon'
        }]
      },
      {
        name: 'Platine repose pied',
        sousSousCategories: [{
          name: 'Platine avant gauche'
        },
        {
          name: 'Platine avant droite'
        },
        {
          name: 'Platine arrière gauche'
        },
        {
          name: 'Platine arrière droite'
        },
        {
          name: 'Repose pied avant gauche'
        },
        {
          name: 'Repose pied avant droit'
        },
        {
          name: 'Repose pied arrière gauche'
        },
        {
          name: 'Repose pied arrière droit'
        },
        {
          name: 'Pédale de frein'
        },
        {
          name: 'Sélecteur de vitesse'
        }]
      },
      {
        name: 'Frein avant',
        sousSousCategories: [{
          name: 'Frein avant complet'
        },
        {
          name: 'Maître cylindre'
        },
        {
          name: 'Disque de frein'
        },
        {
          name: 'Durite de frein'
        }]
      },
      {
        name: 'Frein arrière',
        sousSousCategories: [{
          name: 'Frein arrière complet'
        },
        {
          name: 'Maître cylindre'
        },
        {
          name: 'Disque de frein'
        },
        {
          name: 'Durite de frein'
        }]
      },
      {
        name: 'Jantes',
        sousSousCategories: [{
          name: 'Jante avant'
        },
        {
          name: 'Jante arrière'
        },
        {
          name: 'Axe de roue avant'
        },
        {
          name: 'Axe de roue arrière'
        }]
      }]
    },
    {
      name: 'PARTIE MOTEUR',
      sousCategories: [{
        name: 'Moteur',
        sousSousCategories: [{
          name: 'Moteur complet'
        },
        {
          name: 'Carter gauche'
        },
        {
          name: 'Carter droit'
        },
        {
          name: 'Pièces moteur au détail'
        },
        {
          name: 'Axe moteur'
        }]
      },
      {
        name: 'Carburation/Injection',
        sousSousCategories: [{
          name: 'Carburateur'
        },
        {
          name: 'Pipe admission'
        },
        {
          name: 'Bride'
        },
        {
          name: 'Injection'
        }]
      },
      {
        name: 'Boîte à air',
        sousSousCategories: [{
          name: 'Boîte à air'
        },
        {
          name: 'Filtre à air'
        }]
      },
      {
        name: 'Démarreur',
        sousSousCategories: [{
          name: 'Démarreur'
        },
        {
          name: 'Roue libre démarreur'
        }]
      },
      {
        name: 'Echappement',
        sousSousCategories: [{
          name: 'Collecteur d\'échappement'
        },
        {
          name: 'Pot d\'échappement'
        },
        {
          name: 'Sonde d\'échappement'
        }]
      },
      {
        name: 'Radiateur',
        sousSousCategories: [{
          name: 'Radiateur complet'
        },
        {
          name: 'Radiateur'
        },
        {
          name: 'Calorstat'
        },
        {
          name: 'Durite de refroidissement'
        },
        {
          name: 'Bouchon de radiateur'
        },
        {
          name: 'Ventilateur'
        },
        {
          name: 'Vase d\'expansion'
        }]
      },
      {
        name: 'Câbles',
        sousSousCategories: [{
          name: 'Câble accélérateur'
        },
        {
          name: 'Câble starter'
        },
        {
          name: 'Câble d\'embrayage'
        }]
      }]
    },
    {
      name: 'PARTIE ELECTRIQUE',
      sousCategories: [{
        name: 'Faisceaux électriques',
        sousSousCategories: [{
          name: 'Faisceaux'
        },
        {
          name: 'Capteurs divers'
        },
        {
          name: 'Klaxon'
        },
        {
          name: 'Boîtier CDI'
        }]
      },
      {
        name: 'Eclairage',
        sousSousCategories: [{
          name: 'Phare avant'
        },
        {
          name: 'Phare arrière'
        },
        {
          name: 'Eclairage de plaque'
        },
        {
          name: 'Clignotants'
        }]
      },
      {
        name: 'Compteur',
        sousSousCategories: [{
          name: [{
            name: 'Compteur complet'
          },
          {
            name: 'Câble compteur'
          },
          {
            name: 'Entraîneur compteur'
          },
          {
            name: 'Pièces compteur diverses'
          }]
        }]
      },
      {
        name: 'Serrure/Kit neiman',
        sousSousCategories: [{
          name: 'Kit neiman complet'
        },
        {
          name: 'Neiman'
        },
        {
          name: 'Serrure réservoir'
        },
        {
          name: 'Serrure arrière'
        }]
      },
      {
        name: 'Autre',
        sousSousCategories: [{
          name: 'Régulateur de vitesse'
        },
        {
          name: 'Bobine d\'allumage'
        },
        {
          name: 'Relais de démarreur'
        },
        {
          name: 'Alternateur'
        }]
      },
      {
        name: 'Commodo',
        sousSousCategories: [{
          name: 'Commodo gauche'
        },
        {
          name: 'Commodo droit'
        }]
      }]
    },
    {
      name: 'PARTIE HABILLAGE',
      sousCategories: [{
        name: 'Réservoir',
        sousSousCategories: [{
          name: 'Réservoir'
        },
        {
          name: 'Robinet d\'essence/Pompe à essence'
        },
        {
          name: 'Jauge à essence'
        }]
      },
      {
        name: 'Selle',
        sousSousCategories: [{
          name: 'Selle'
        },
        {
          name: 'Capot de selle'
        },
        {
          name: 'Mécanisme fermeture de selle'
        }]
      },
      {
        name: 'Carénages divers',
        sousSousCategories: [{
          name: 'Carénage avant gauche'
        },
        {
          name: 'Carénage avant droit'
        },
        {
          name: 'Bulle/saut de vent'
        },
        {
          name: 'Tête de fourche'
        },
        {
          name: 'Entourage compteur'
        },
        {
          name: 'Passage de roue'
        },
        {
          name: 'Carénages divers'
        }]
      },
      {
        name: 'Garde boue',
        sousSousCategories: [{
          name: 'Garde boue avant'
        },
        {
          name: 'Garde boue arrière'
        }]
      },
      {
        name: 'Coque arrière',
        sousSousCategories: [{
          name: 'Coque arrière complète'
        },
        {
          name: 'Coque arrière gauche'
        },
        {
          name: 'Coque arrière droite'
        },
        {
          name: 'Diverses coques arrières'
        }]
      }],
    }]
  };

  initFiltre() {
    this.piece = '';
    this.route.navigate(['/home']);
  }

}
