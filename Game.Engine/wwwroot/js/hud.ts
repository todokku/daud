import { Settings } from "./settings";
import { customElement, ITemplateDefinition } from "@aurelia/runtime";
import template from "./hud.html";

@customElement(<ITemplateDefinition>{ name: "hud", template })
export class HUD {
    latency: number;
    framesPerSecond: number;
    playerCount: number;
    spectatorCount: number;
    Settings = Settings;
}
