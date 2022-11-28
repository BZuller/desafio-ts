import React from 'react';
import { Routes as ReactRoutes, Route} from 'react-router-dom';
import HoursSheet from '../pages/HoursSheet';

const Routes: React.FunctionComponent = () => {

    return (
        <main>
        <ReactRoutes>
          <Route path="/" element={<HoursSheet />} />
          </ReactRoutes>
          </main>
    );
}

export default Routes