import { SpecSection } from '../types/specs';

export const specifications: SpecSection[] = [
  {
    id: 'context',
    title: 'Contexte',
    description: 'Notre mission et vision pour l\'éducation en ligne',
    specs: [
      {
        id: 'company',
        title: 'Présentation',
        items: [
          'Plateforme d\'apprentissage d\'anglais en ligne',
          'Service personnalisé et adaptatif',
          'Expertise pédagogique reconnue'
        ]
      },
      {
        id: 'objectives',
        title: 'Objectifs',
        items: [
          'Démocratiser l\'apprentissage de l\'anglais',
          'Offrir une formation de qualité à distance',
          'Créer une communauté d\'apprenants active'
        ]
      }
    ]
  },
  {
    id: 'features',
    title: 'Fonctionnalités',
    description: 'Les services et outils proposés par notre plateforme',
    specs: [
      {
        id: 'core',
        title: 'Principales',
        items: [
          'Système d\'inscription et authentification',
          'Réservation de cours en ligne',
          'Paiement sécurisé',
          'Tableau de bord personnalisé'
        ]
      },
      {
        id: 'secondary',
        title: 'Secondaires',
        items: [
          'Système d\'évaluation des cours',
          'Notifications par email',
          'Forum d\'entraide',
          'Resources pédagogiques téléchargeables'
        ]
      }
    ]
  },
  {
    id: 'technical',
    title: 'Aspects Techniques',
    description: 'Infrastructure et technologies utilisées',
    specs: [
      {
        id: 'tech',
        title: 'Technologies',
        items: [
          'React.js pour l\'interface utilisateur',
          'Node.js pour le backend',
          'Base de données sécurisée',
          'Hébergement cloud scalable'
        ]
      },
      {
        id: 'security',
        title: 'Sécurité',
        items: [
          'Chiffrement des données sensibles',
          'Authentification sécurisée',
          'Conformité RGPD',
          'Sauvegardes automatiques'
        ]
      }
    ]
  }
];