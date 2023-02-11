import {CloudOutline, GameControllerOutline} from "@vicons/ionicons5";

import {addMenuOptions} from "../plugins/menuOptions.js";


const modules = [
    {
        id: "tunnels",
        name: "PortIO",
        route: "modules.tunnels.index",
        icon: CloudOutline
    }
]

for (let i = 0; i < modules.length; i++) {
    addMenuOptions('top', modules[i].route, modules[i].name, modules[i].icon);
}
