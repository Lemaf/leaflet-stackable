/**
 */
L.Stackable = L.FeatureGroup.extend({

	options: {
		pane: 'stackable'
	},

	initialize: function (layers, options) {
		L.FeatureGroup.prototype.initialize.call(this, layers);
	},

	addLayer: function (layer) {
		L.setOptions(layer, {
			renderer: this._rendererOf(layer)
		});

		return L.FeatureGroup.prototype.addLayer.call(this, layer);
	},

	moveUp: function (layer) {
		if (this.hasLayer(layer)) {
			
		}
	},

	

	_rendererOf: function (layer) {
		if (this._map && this._map.preferCanvas) {
			return L.canvas({pane: this.options.pane});
		} else {
			return L.svg({pane: this.options.pane})
		}
	}

});

L.stackable = function (layers, options) {
	return new L.Stackable(layers, options);
};