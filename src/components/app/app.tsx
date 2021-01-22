import {Button} from 'carbon-components-react';
/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import React, {Suspense, lazy} from 'react';

import {stylesContainer} from './app.module.less';
import {stylesHeader, stylesImage} from './app.module.scss';

export const App = (): React.ReactElement => (
    <div className={stylesContainer}>
        <div className={stylesHeader}>It works</div>
        <Button>Button</Button>
    </div>
);
