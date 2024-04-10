#importando frameworks
from flask import Flask

#importando rotas
from routes import home, calculadora

#instanciando flask
app = Flask(__name__)

#registrando rotas
app.register_blueprint(home.bp)
app.register_blueprint(calculadora.bp)

#rodando aplicação (modo de desenvolvimento ativo)
app.run(debug=True)