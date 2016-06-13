/* jshint expr:true */
import {
  describe,
  it,
  beforeEach,
  afterEach
} from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import Ember from 'ember';

describe('Acceptance: RoutingTest', function() {
  var application;
  this.timeout(450000);

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    Ember.run(application, 'destroy');
  });

  it('links to artists, songs and albums from the landing page', function() {
    visit('/');

    andThen(function() {
       expect(find('ul li#artists a').attr('href')).to.eq("/artists");
       expect(find('ul li#songs a').attr('href')).to.eq("/songs");
       expect(find('ul li#albums a').attr('href')).to.eq("/albums");
    });
  });

  it('lists all of the artists on the artists index page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#artists a');
      andThen(function() {
        expect(find('ul li.artists').length).to.eq(197);
        expect(find('ul li.artists:first a').attr('href')).to.eq("/artists/1");
        expect(find('ul li.artists:first a').text().trim()).to.eq("Justin Bieber");
      });
    });
  });

   it('shows the artist details on the artist show page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#artists a');
      andThen(function() {
        click('ul li.artists:first a');
        andThen(function() {
          expect(find('h4').text().trim()).to.eq("Justin Bieber");
          expect(find('ul li.albums:first').text().trim()).to.eq("Purpose (Deluxe)");
          expect(find('ul li.albums:first a').attr('href')).to.eq("/albums/1");
        });
      });
    });
  });

  it('lists all of the songs on the songs index page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#songs a');
      andThen(function() {
        expect(find('ul li.songs').length).to.eq(246);
        expect(find('ul li.songs:first a').attr('href')).to.eq("/songs/1");
        expect(find('ul li.songs:first a').text().trim()).to.eq("Sorry");
      });
    });
  });

   it('shows the song details on the song show page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#songs a');
      andThen(function() {
        click('ul li.songs:first a');
        andThen(function() {
          expect(find('h4').text().trim()).to.eq("Sorry");
          expect(find('p#album').text().trim()).to.eq("album: Purpose (Deluxe)");
          expect(find('p#album a').attr('href')).to.eq("/albums/1");
          expect(find('ul li.artists:first a').text().trim()).to.eq("Justin Bieber");
          expect(find('ul li.artists:first a').attr('href')).to.eq("/artists/1");
        });
      });
    });
  });

   it('lists all of the albums on the albums index page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#albums a');
      andThen(function() {
        expect(find('ul li.albums').length).to.eq(191);
        expect(find('ul li.albums:first a').attr('href')).to.eq("/albums/1");
        expect(find('ul li.albums:first a').text().trim()).to.eq("Purpose (Deluxe)");
      });
    });
  });

   it('shows the album details on the album show page', function() {
    visit ('/');
    andThen(function() {
      click('ul li#albums a');
      andThen(function() {
        click('ul li.albums:first a');
        andThen(function() {
          expect(find('h4').text().trim()).to.eq("Purpose (Deluxe)");
          expect(find('ul li.songs:first a').text().trim()).to.eq("Sorry");
          expect(find('ul li.songs:first a').attr('href')).to.eq("/songs/1");
        });
      });
    });
  });


});
