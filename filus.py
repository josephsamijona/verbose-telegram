import os

def create_filesystem():
    structure = {
        "src": {
            "assets": {
                "logo.svg": "",  # Fichier vide
                "images": {}
            },
            "components": {
                "layout": {
                    "Header.jsx": "", 
                    "Footer.jsx": "", 
                    "Layout.jsx": ""
                },
                "ui": {
                    "PropertyCard.jsx": "",
                    "HeroSection.jsx": "",
                    "Button.jsx": ""
                }
            },
            "pages": {
                "Home.jsx": "",
                "Properties.jsx": "",
                "PropertyDetail.jsx": "",
                "Explore.jsx": "",
                "About.jsx": "",
                "Contact.jsx": "",
                "NotFound.jsx": ""
            },
            "data": {
                "mockData.js": ""
            },
            "styles": {
                "index.css": ""
            },
            "App.jsx": "",
            "main.jsx": ""
        }
    }
    
    def create_structure(base_path, structure):
        for name, content in structure.items():
            path = os.path.join(base_path, name)
            if isinstance(content, dict):  # Si c'est un dossier
                os.makedirs(path, exist_ok=True)
                create_structure(path, content)
            else:  # Si c'est un fichier
                with open(path, "w", encoding="utf-8") as f:
                    f.write(content)
    
    base_dir = os.getcwd()
    create_structure(base_dir, structure)
    print("Structure du projet créée avec succès !")

if __name__ == "__main__":
    create_filesystem()
