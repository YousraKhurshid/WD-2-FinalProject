// admin.js
function vender(req, res, next) {
    if (req.user.role === 'vender') {
      next(); 
    } else {
      res.status(403).json({ message: 'Permission denied' });
    }
  }
  
  module.exports = vender;
  