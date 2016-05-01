var priceBase = 0.8;
var priceRatio = 1.5;
var priceStart = 6;
var priceWait = 0.25;
var distThresh = 8;
var distStart = 2;


var taxiFee = function(distance, waitTime){
	if (distance <= 0){
		return (0);
	}

	if (distance <= distStart){
		return (priceStart);
	}

	var price2 = priceBase*(distance-distStart);
	if (distance >= distThresh){
		price2 *= priceRatio;
	}
	return Math.round(price2+priceStart+priceWait*waitTime);
};

module.exports.taxiFee = taxiFee;