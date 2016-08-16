function GameOfThronesEpisode(seasonNr, episodeNr, title) {
    this.seasonNr = seasonNr;
    this.episodeNr = episodeNr;
    this.title = title;
    this.peopleWillDie = false;
    this.castMembers = [];
}

GameOfThronesEpisode.episodesInSeason = 10;

GameOfThronesEpisode.prototype.printEpisode = function () {
    return `S${this.seasonNr}E${this.episodeNr} - ${this.title}`;
};

GameOfThronesEpisode.prototype.containsCliffHanger = function (containsCliffHanger) {
    this.peopleWillDie = containsCliffHanger;
};

GameOfThronesEpisode.prototype.calculateRemainingEpisodes = function () {
    return GameOfThronesEpisode.episodesInSeason - this.episodeNr;
};

GameOfThronesEpisode.prototype.addCastMember = function (castMember) {
    this.castMembers.push(castMember);
    return this;
};

GameOfThronesEpisode.prototype.__defineGetter__('kicksAss', function () {
    return this.castMembers.indexOf('Tyrion Lannister') > -1;
});

GameOfThronesEpisode.prototype.printCast = function () {
    return this.castMembers.join(', ');
};
