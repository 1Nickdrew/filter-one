import React, { useState } from 'react';
import { Filter } from 'lucide-react';

// Données factices pour 20 utilisateurs
const usersData = [
    { nom: "Dubois", prenom: "Marie", email: "marie.dubois@email.com", telephone: "0123456789", residence: "Appartement", ville: "Paris", pays: "France" },
    { nom: "Martin", prenom: "Jean", email: "jean.martin@email.com", telephone: "0234567890", residence: "Maison", ville: "Lyon", pays: "France" },
    { nom: "Lefevre", prenom: "Sophie", email: "sophie.lefevre@email.com", telephone: "0345678901", residence: "Appartement", ville: "Paris", pays: "France" },
    { nom: "Moreau", prenom: "Pierre", email: "pierre.moreau@email.com", telephone: "0456789012", residence: "Maison", ville: "Lyon", pays: "France" },
    { nom: "Girard", prenom: "Claire", email: "claire.girard@email.com", telephone: "0567890123", residence: "Appartement", ville: "New York", pays: "USA" },
    { nom: "Roux", prenom: "Luc", email: "luc.roux@email.com", telephone: "0678901234", residence: "Maison", ville: "Toronto", pays: "Canada" },
    { nom: "Blanc", prenom: "Julie", email: "julie.blanc@email.com", telephone: "0789012345", residence: "Appartement", ville: "New York", pays: "USA" },
    { nom: "Gauthier", prenom: "Alexandre", email: "alexandre.gauthier@email.com", telephone: "0890123456", residence: "Maison", ville: "Toronto", pays: "Canada" },
    { nom: "Perrin", prenom: "Nathalie", email: "nathalie.perrin@email.com", telephone: "0901234567", residence: "Appartement", ville: "Paris", pays: "France" },
    { nom: "Boyer", prenom: "Antoine", email: "antoine.boyer@email.com", telephone: "1012345678", residence: "Maison", ville: "New York", pays: "USA" },
    { nom: "Dupuis", prenom: "Camille", email: "camille.dupuis@email.com", telephone: "1123456789", residence: "Appartement", ville: "Lyon", pays: "France" },
    { nom: "Fontaine", prenom: "Vincent", email: "vincent.fontaine@email.com", telephone: "1234567890", residence: "Maison", ville: "Toronto", pays: "Canada" },
    { nom: "Chevalier", prenom: "Isabelle", email: "isabelle.chevalier@email.com", telephone: "1345678901", residence: "Appartement", ville: "New York", pays: "USA" },
    { nom: "Lambert", prenom: "Mathieu", email: "mathieu.lambert@email.com", telephone: "1456789012", residence: "Maison", ville: "Paris", pays: "France" },
    { nom: "Muller", prenom: "Laetitia", email: "laetitia.muller@email.com", telephone: "1567890123", residence: "Appartement", ville: "Lyon", pays: "France" },
    { nom: "Lemoine", prenom: "Philippe", email: "philippe.lemoine@email.com", telephone: "1678901234", residence: "Maison", ville: "New York", pays: "USA" },
    { nom: "Dumont", prenom: "Aurélie", email: "aurelie.dumont@email.com", telephone: "1789012345", residence: "Appartement", ville: "Toronto", pays: "Canada" },
    { nom: "Bigot", prenom: "Stéphane", email: "stephane.bigot@email.com", telephone: "1890123456", residence: "Maison", ville: "Lyon", pays: "France" },
    { nom: "Roy", prenom: "Manon", email: "manon.roy@email.com", telephone: "1901234567", residence: "Appartement", ville: "Toronto", pays: "Canada" },
    { nom: "Renaud", prenom: "David", email: "david.renaud@email.com", telephone: "2012345678", residence: "Maison", ville: "Paris", pays: "France" }
  ];
  

const UserTable = () => {
  const [users, setUsers] = useState(usersData);
  const [filters, setFilters] = useState({
    telephone: '',
    residence: '',
    ville: '',
    pays: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const applyFilters = () => {
    const filteredUsers = usersData.filter(user => {
      return Object.keys(filters).every(key => 
        filters[key] === '' || user[key].toLowerCase().includes(filters[key].toLowerCase())
      );
    });
    setUsers(filteredUsers);
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center space-x-4">
        <Filter className="text-gray-500" />
        <input
          type="text"
          name="telephone"
          placeholder="Téléphone"
          value={filters.telephone}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="residence"
          placeholder="Lieu de résidence"
          value={filters.residence}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="ville"
          placeholder="Ville"
          value={filters.ville}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="pays"
          placeholder="Pays"
          value={filters.pays}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        />
        <button
          onClick={applyFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Filtrer
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nom</th>
            <th className="py-3 px-6 text-left">Prénom</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Téléphone</th>
            <th className="py-3 px-6 text-left">Résidence</th>
            <th className="py-3 px-6 text-left">Ville</th>
            <th className="py-3 px-6 text-left">Pays</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {users.map((user, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{user.nom}</td>
              <td className="py-3 px-6 text-left">{user.prenom}</td>
              <td className="py-3 px-6 text-left">{user.email}</td>
              <td className="py-3 px-6 text-left">{user.telephone}</td>
              <td className="py-3 px-6 text-left">{user.residence}</td>
              <td className="py-3 px-6 text-left">{user.ville}</td>
              <td className="py-3 px-6 text-left">{user.pays}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;