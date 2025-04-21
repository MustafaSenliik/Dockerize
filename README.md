# 🐳 Dockerize

Bu repo, farklı programlama dilleri ve teknolojilerle yazılmış örnek uygulamaların nasıl **Dockerize** edileceğini ve **Docker Compose** ile nasıl orkestre edileceğini göstermektedir.

Her klasör, kendi içinde bağımsız bir örnek içerir ve bir uygulamanın adım adım konteynerleştirilmesini anlamanıza yardımcı olur.

---

## 📁 Proje Yapısı

```bash
.
├── go-docker-compose/              # Basit bir Go uygulamasının dockerize edilmesi
├── node-docker-compose/            # Node.js uygulaması için Docker ve Compose dosyaları
├── node-mysql-docker-compose/      # Node.js + MySQL birlikte kullanımı (multi-container)
├── python-docker-compose/          # Basit bir Python uygulamasının dockerize edilmesi
├── Kapsamları Notlarım/            # Temelden ileri düzeye çıkarılan notlar
└── .gitattributes                  # Satır sonu uyumluluğu için ayarlar
