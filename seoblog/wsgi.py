"""
WSGI config for seoblog project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application
# from whitenoise.django import DjangoWhiteNoise#при развертывании библиотека whitenoise для работы с css

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'seoblog.settings')

application = get_wsgi_application()
# application = DjangoWhiteNoise(application)#при развертывании библиотека whitenoise для работы с css
