import json
from flask import Flask, render_template, send_file
from datetime import datetime

app = Flask(__name__)
    
@app.route('/')
def index():
    return render_template('index.html')    

@app.route('/download')
def download_file():
    path = './result.json'
    return send_file(path, as_attachment=True)

hora_clique = None
@app.route('/click', methods=['POST'])
def submit():
    global hora_clique
    diferenca_segundos = ''

    
    if hora_clique is None:
        hora_clique = datetime.now()
    else:
        segundo_clique = datetime.now()

        diferenca_segundos = (segundo_clique - hora_clique).total_seconds()



        data = {diferenca_segundos:{
                "primeiro_clique": '',
                "segundo_clique": '',
                "diferenca_segundos": ''
            }
        }            

        try:
        
            with open('result.json', 'r') as f:
                data = json.load(f)

                
            data[diferenca_segundos] = {
                    "primeiro_clique": str(hora_clique),
                    "segundo_clique": str(segundo_clique),
                    "diferenca_segundos": diferenca_segundos,
            
                }

            with open('result.json', 'w') as f:
                json.dump(data, f, indent=4)
        except:
            data[diferenca_segundos] = {
                    "primeiro_clique": str(hora_clique),
                    "segundo_clique": str(segundo_clique),
                    "diferenca_segundos": diferenca_segundos,
                
                }
            with open('result.json', 'w') as f:
                json.dump(data, f, indent=4)

        hora_clique = None
        segundo_clique = None
            
        
    return render_template("index.html", diferenca_segundos=diferenca_segundos)  



if __name__ == "__main__":
    app.run(debug=True)