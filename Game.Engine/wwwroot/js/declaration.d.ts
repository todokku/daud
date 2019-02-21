declare module "*.png";
declare module "img/worlds/*.png";
interface Window {
    Game: any;
}
declare module "*.html" {
    const value: string;
    export default value;
}
