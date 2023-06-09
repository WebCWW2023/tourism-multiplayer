import * as THREE from "three";
import { objectArray, scene } from "../game.js";

let glassColor = new THREE.Color(0x575757);
const UpdateMesh = (cityGroup, gui, mainModel) => {
    let terain = mainModel.scene.getObjectByName("terain");
    if (terain) {
        terain.material.metalness = 0.19;
        terain.material.roughness = 1;
        terain.material.reflectivity = 0.46;
    }
    let terain001 = mainModel.scene.getObjectByName("terain001");
    if (terain001) {
        terain001.material.metalness = 0.19;
        terain001.material.roughness = 1;
        terain001.material.reflectivity = 0.46;
    }
    let piramid002 = mainModel.scene.getObjectByName("piramid002");
    if (piramid002) {
        piramid002.material.metalness = 0;
        piramid002.material.roughness = 1.0;
        piramid002.material.reflectivity = 0.46;
    }

    let wall009001 = mainModel.scene.getObjectByName("wall009001");
    if (wall009001) {
        wall009001.material.metalness = 0.19;
        wall009001.material.roughness = 1;
    }
    let water = mainModel.scene.getObjectByName("water");
    if (water) {
        water.material.color = new THREE.Color(0x094280);
    }

    var tree_alpha = new THREE.TextureLoader().load('../../static/texture/tree_alpha.png');
    tree_alpha.flipY = false;
    let treePlane = scene.getObjectByName("Trees_Part184");
    treePlane.material.alphaMap = tree_alpha;

    let tree_alpha2 = new THREE.TextureLoader().load('../../static/texture/tree_alpha2.png');
    tree_alpha2.flipY = false;
    let treePlane2 = scene.getObjectByName("Trees_Part070");
    treePlane2.material.alphaMap = tree_alpha2;

    var catusAlphaTexture = new THREE.TextureLoader().load('../../static/texture/cactus_alpha.png');
    catusAlphaTexture.flipY = false;
    let catusAlpha = scene.getObjectByName("Trees_Part052");
    catusAlpha.material.alphaMap = catusAlphaTexture;

    var catusAlphaTexture2 = new THREE.TextureLoader().load('../../static/texture/cactus_alpha2.png');
    catusAlphaTexture2.flipY = false;
    let catusAlpha2 = scene.getObjectByName("Trees_Part043");
    catusAlpha2.material.alphaMap = catusAlphaTexture2;

    var catusAlphaTexture3 = new THREE.TextureLoader().load('../../static/texture/cactus_alpha3.png');
    catusAlphaTexture3.flipY = false;
    let catusAlpha3 = scene.getObjectByName("Trees_Part469");
    catusAlpha3.material.alphaMap = catusAlphaTexture3;

    var catusAlphaTexture4 = new THREE.TextureLoader().load('../../static/texture/cactus_alpha4.png');
    catusAlphaTexture4.flipY = false;
    let catusAlpha4 = scene.getObjectByName("Trees_Part048");
    catusAlpha4.material.alphaMap = catusAlphaTexture4;
}
const addObjectToArray = (object) => {
    switch (object.material.name) {
        case 'tree_1':
            break;
        case 'tree6':
            break;
        case 'tree3':
            break;
        case 'tree7':
            break;
        case 'tree8':
            break;
        default:
            objectArray.push(object);
            break;
    }
}
export { UpdateMesh, addObjectToArray }

