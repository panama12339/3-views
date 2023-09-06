import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function HomeTutor() {
    return (
        <AppLayout
          title="Tutor"
          renderHeader={() => (
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
              Pagina Inicial Tutor
            </h2>
          )}
        >
          <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                <div>Pagina Inicial Tutor</div>
              </div>
            </div>
          </div>
        </AppLayout>
      );
    }
    