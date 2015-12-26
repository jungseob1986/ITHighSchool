var express = require('express');
var router = express.Router();

var Parse = require('parse/node');
Parse.initialize("j3FxDXM6v9k3AjnhDfgTcbCUYUNJcHGb3G82GjwA", 
	"mWTYfqJ9mEVbsSTE2O2DAsjVmvTxZ805qfUH5zZZ");

var Users = Parse.Object.extend("Users");

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  
  var user = new Users();
  user.set("name", req.query.name);
  user.set("password", req.query.password);
  user.set("age", +req.query.age);
  user.set("isDeleted", false);
  
  user.save(null, {
	  success: function(savedUser) {
	    res.send('가입: ' + savedUser.id);
	  },
	  error: function(user, error) {
	    res.send("Error: " + error.code + " " + error.message);
	  }
	});

});

router.get('/signout', function(req, res, next) {
  var query = new Parse.Query(Users);
	query.equalTo("name", req.query.name);
	query.equalTo("password", req.query.password);
	query.equalTo("isDeleted", false);
	query.find({
	  success: function(results) {
	    if(results.length === 0) {
				return res.send('해당 유저가 없습니다.');
	  	}
	    var targetUser = results[0];
	    targetUser.set("isDeleted", true);
	    targetUser.save(null, {
			  success: function(savedUser) {
			    res.send('탈퇴: ' + savedUser.id);
			  },
			  error: function(user, error) {
			    res.send("Error: " + error.code + " " + error.message);
			  }
			});
	  },
	  error: function(error) {
	    res.send("Error: " + error.code + " " + error.message);
	  }
	});
});

router.get('/update', function(req, res, next) {
  var query = new Parse.Query(Users);
	query.equalTo("name", "홍길동");
	query.equalTo("password", "12344321");
	query.equalTo("isDeleted", false);
	query.find({
	  success: function(results) {
	  	if(results.length === 0) {
				return res.send('해당 유저가 없습니다.');
	  	}
	    var targetUser = results[0];
	    targetUser.set("age", 50);
	    targetUser.save(null, {
			  success: function(savedUser) {
			    res.send('업데이트: ' + savedUser.id);
			  },
			  error: function(user, error) {
			    res.send("Error: " + error.code + " " + error.message);
			  }
			});
	  },
	  error: function(error) {
	    res.send("Error: " + error.code + " " + error.message);
	  }
	});
});

module.exports = router;
