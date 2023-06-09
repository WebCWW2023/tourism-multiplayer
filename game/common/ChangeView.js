const ChangeView = (myAvtar, avtarViewCount) => {

    if (avtarViewCount === 0) {
        myAvtar.children[0].children[2].position.set(0, 1.0, 0);
    }
    else if (avtarViewCount === 1) {
        myAvtar.children[0].children[2].position.set(0, 5, 25);
        // myAvtar.children[0].children[2].position.set(0, 20, 55);
    }
    else if (avtarViewCount === 2) {
        myAvtar.children[0].children[2].position.set(0, 0.6, 5.5);
    }
}
export { ChangeView }