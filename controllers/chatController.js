// Methode appelée lors d'une requete GET sur /chat
exports.getChat = async (request, response, next) => {
    try {
      return response.render('chat');
    } catch (e) {
      console.error(e);
    }
  };