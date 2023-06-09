import * as THREE from "three";
import { bannerNameArray } from "../game.js";

var texture1 = new THREE.TextureLoader().load('../static/texture/banner.jpg');
texture1.flipY = false;

 
const banner1_material1 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
const banner1_material2 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
const banner1_material3 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
const banner1_material4 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
const banner1_material5 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
const banner1_material6 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
const banner1_material7 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
const banner1_material8 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
const banner1_material9 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });
const banner1_material10 = new THREE.MeshBasicMaterial({ map: texture1, side: THREE.DoubleSide });

const UpdateMaterial = (object) => {

    let type;
    switch (object.material.name) {
        case 'banner_1':
            object.material = banner1_material1;
            bannerNameArray.push(object.name);
            break;
        case 'banner_2':
            object.material = banner1_material2;
            bannerNameArray.push(object.name);
            break;
        case 'banner_3':
            object.material = banner1_material3;
            bannerNameArray.push(object.name);
            break;
        case 'banner_4':
            object.material = banner1_material4;
            bannerNameArray.push(object.name);
            break;
        case 'banner_5':
            object.material = banner1_material5;
            bannerNameArray.push(object.name);
            break;
        case 'Material #4':
            object.material = banner1_material6;
            bannerNameArray.push(object.name);
            break;
        case 'banner_6':
            object.material = banner1_material7;
            bannerNameArray.push(object.name);
            break;
        case 'banner_7':
            object.material = banner1_material8;
            bannerNameArray.push(object.name);
            break;
        case 'banner_8':
            object.material = banner1_material9;
            bannerNameArray.push(object.name);
            break;
        case 'screen':
            object.material = banner1_material10;
            bannerNameArray.push(object.name);
            break;
        default:
            break;
    }



}

export { UpdateMaterial }