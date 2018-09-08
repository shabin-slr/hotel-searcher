/* 
var request = require("request");
var base_url = "http://localhost:3000/";
var mock = require('mock-require');

describe("Testing hoteSearchController", function(){
    var  server, mockHandle, spy;
    
    beforeEach(function(){
        mockHandle = {
            handleSearchRequest :  (req, res) => {  return res.send([]);}
        }
        
        var hotelSearchController = {
            handleSearchRequest: mockHandle.handleSearchRequest
        };

        mock("../../app/controllers/hotelSearchController", hotelSearchController);
        server = require("../utils/server")();
    });

    afterEach((done)=>{
        mock.stop("../../app/controllers/hotelSearchController")
        mock.stopAll();
        spy = null;
        server.close(done);
    });
    
    it('should call handleSearchRequest()', function(done) {
        spy = spyOn(mockHandle, "handleSearchRequest").and.callThrough();
        request.get(base_url+"search", function(error, response, body) {
            if(error){
                console.error("*************************");
                console.error(error);
            }
            expect(body).toBe("hi");
            expect(spy).toHaveBeenCalled();
            done();
        });
    });
}); */