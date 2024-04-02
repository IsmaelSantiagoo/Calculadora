#importando frameworks
from flask import Flask

#importando rotas
from routes.home import home

#instanciando flask
app = Flask(__name__)

#registrando rotas
app.register_blueprint(home)

#rodando aplicação (modo de desenvolvimento ativo)
app.run(debug=True)