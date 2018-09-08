
var request = require("request");
var base_url = "http://localhost:3000/";
var nock = require('nock');

describe("Testing routes", function(){
    var  server;
    
    beforeEach(function(){
        server = require("../utils/server")();
        nock('https://api.myjson.com')
        .get('/bins/tl0bp')
        .reply(200, {hotels:[]})
    });

    afterEach(function(done){
        server.close(done);
        nock.cleanAll();
    });

    it('should responds to / with html', function(done) {
        request.get(base_url, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            expect(response.headers["content-type"]).toContain("text/html");
            done();
        });
    });

    
    it('should responds to /search with json', function(done) {
        request.get(base_url+"search", function(error, response, body) {
            console.log(body);
            expect(response.statusCode).toBe(200);
            expect(response.headers["content-type"]).toContain("application/json");
            done();
        });
    });
});