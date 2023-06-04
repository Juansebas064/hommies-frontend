import React from "react";

const SiteModalView = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed w-52 h-52 inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-lg font-bold mb-4">Informacion del sitio</h2>
        <p className="mb-4">Petición a backend en progreso...</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default SiteModalView;
