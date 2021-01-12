function Mouse(name) {
	this.name = name;
	this.dead = false;
}

Mouse.prototype.die = fuction() {
	this.dead = true;
};

module.exports = Mouse;
