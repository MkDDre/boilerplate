const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1 : Branding */}
        <div>
          <h2 className="text-lg font-bold text-white mb-2">
            THE ATHLETES&apos; PROGRESS
          </h2>
          <p className="text-sm">
            Révèle ton potentiel athlétique avec une préparation physique sur mesure.
            Excellence, performance et progression garanties.
          </p>
          <div className="flex space-x-4 mt-4">
            <span className="inline-block bg-gray-800 p-2 rounded">📸</span>
            <span className="inline-block bg-gray-800 p-2 rounded">▶️</span>
            <span className="inline-block bg-gray-800 p-2 rounded">⛰️</span>
          </div>
        </div>

        {/* Colonne 2 : Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Accueil</a></li>
            <li><a href="#" className="hover:text-white">Prestations</a></li>
            <li><a href="#" className="hover:text-white">Communauté</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Colonne 3 : Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📧 contact@theathletes-progress.com</li>
            <li>📞 +33 6 XX XX XX XX</li>
            <li>📍 Suisse</li>
          </ul>
        </div>
      </div>

      {/* Ligne Reste connecté */}
      <div className="container mx-auto px-4 py-6 border-t border-gray-800">
        <h4 className="text-white font-semibold mb-1">Reste connecté</h4>
        <p className="text-sm">Reçois mes derniers conseils et offres exclusives</p>
        <button className="mt-4 bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-700">
          Recevoir l&apos;ebook gratuit
        </button>
      </div>

      {/* Bas de page */}
      <div className="container mx-auto px-4 py-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <p>© 2024 The Athletes&apos; Progress. Tous droits réservés.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Politique de confidentialité</a>
          <a href="#" className="hover:text-white">Mentions légales</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
