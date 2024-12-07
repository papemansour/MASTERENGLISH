import React from 'react';
import { specifications } from '../data/specifications';
import { FileText, Check } from 'lucide-react';

export function Specifications() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Cahier des Charges</h2>
          <p className="mt-4 text-xl text-gray-600">
            Notre engagement pour une formation d'excellence
          </p>
        </div>

        <div className="space-y-12">
          {specifications.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
              </div>
              <p className="text-gray-600 mb-8">{section.description}</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {section.specs.map((spec) => (
                  <div key={spec.id} className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {spec.title}
                    </h4>
                    <ul className="space-y-3">
                      {spec.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}