from flask import Blueprint, render_template

bp = Blueprint('calculadora', __name__)

@bp.route('/calculadora')
def calculadora():
    return render_template('calculadora.html')