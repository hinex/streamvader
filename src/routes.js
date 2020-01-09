import Popup from './views/Popup'
import Options from './views/Options'
import Add from './views/Add'

export default [
    {
        path: '/',
        name: 'popup',
        component: Popup
    },
    {
        path: '/templates',
        name: 'options',
        component: Options
    },
    {
        path: '/add',
        name: 'add',
        component: Add
    }
]
