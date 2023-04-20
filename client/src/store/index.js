import { proxy } from "valtio";

const state = proxy({
    intro: true, // are we currently on the home page or not
    color: "#EFBD48", // default color
    isLogoTexture: true, // are we currently displaying the logo on our shirt
    isFullTexture: false,
    logoDecal: "./threejs.png",
    fullDecal: "./threejs.png",
});

export default state;
