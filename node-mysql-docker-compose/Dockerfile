# Node.js resmi imajını kullan
FROM node:16-alpine

# Çalışma dizinini ayarla
WORKDIR /app

# wait-for-it.sh dosyasını kopyala
COPY  wait-for-it.sh ./ 

# wait-for-it.sh dosyasını çalıştırılabilir yap
RUN chmod +x wait-for-it.sh 

# Proje dosyalarını kopyala
COPY package*.json ./
RUN npm install
COPY . .

# Portu aç
EXPOSE 3003

# Uygulamayı başlat
CMD ["sh", "wait-for-it.sh", "db", "3306", "--", "npm", "start"]
