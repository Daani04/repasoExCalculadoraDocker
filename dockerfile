# Usar una imagen base de PHP con Apache
FROM php:8.3-apache

# Copiar los archivos de la aplicación al contenedor
COPY . /var/www/html/

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instalar dependencias de Composer
RUN composer install --no-dev --optimize-autoloader

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Apache
CMD ["apache2-foreground"]
