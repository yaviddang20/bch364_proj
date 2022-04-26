const swup = new Swup();

function init() {
  if (document.querySelector("#results-background")) {
    $(function () {
      let element = $("#container-01");
      let config = { backgroundColor: "#ffaebc" };
      let viewer = $3Dmol.createViewer(element, config);
      let pdbUri = "/pdbs/yeast/rank_1_model_3_ptm_seed_0_unrelaxed.pdb";
      jQuery.ajax(pdbUri, {
        success: function (data) {
          let v = viewer;
          v.addModel(data, "pdb"); /* load data */
          v.setStyle(
            {},
            { cartoon: { color: "spectrum" } }
          ); /* style all atoms */
          v.zoomTo(); /* set camera */
          v.render(); /* render scene */
          v.zoom(1.2, 1000); /* slight zoom */
        },
        error: function (hdr, status, err) {
          console.error("Failed to load PDB " + pdbUri + ": " + err);
        },
      });
      let element2 = $("#container-02");
      let config2 = { backgroundColor: "#ffaebc" };
      let viewer2 = $3Dmol.createViewer(element2, config2);
      let pdbUri2 = "/pdbs/yeast/prediction_KOG2497KOG2837_8313e/rank_1_model_5_ptm_seed_0_unrelaxed.pdb";
      jQuery.ajax(pdbUri2, {
        success: function (data) {
          let v = viewer2;
          v.addModel(data, "pdb"); /* load data */
          v.setStyle(
            {},
            { cartoon: { color: "spectrum" } }
          ); /* style all atoms */
          v.zoomTo(); /* set camera */
          v.render(); /* render scene */
          v.zoom(1.2, 1000); /* slight zoom */
        },
        error: function (hdr, status, err) {
          console.error("Failed to load PDB " + pdbUri + ": " + err);
        },
      });
      let element3 = $("#container-03");
      let config3 = { backgroundColor: "#ffaebc" };
      let viewer3 = $3Dmol.createViewer(element3, config3);
      let pdbUri3 = "/pdbs/yeast/prediction_KOG2497KOG2837_8313e/rank_2_model_3_ptm_seed_0_unrelaxed.pdb";
      jQuery.ajax(pdbUri3, {
        success: function (data) {
          let v = viewer3;
          v.addModel(data, "pdb"); /* load data */
          v.setStyle(
            {},
            { cartoon: { color: "spectrum" } }
          ); /* style all atoms */
          v.zoomTo(); /* set camera */
          v.render(); /* render scene */
          v.zoom(1.2, 1000); /* slight zoom */
        },
        error: function (hdr, status, err) {
          console.error("Failed to load PDB " + pdbUri + ": " + err);
        },
      });
    });
  }
}

init();

swup.on("contentReplaced", init);
