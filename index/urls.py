from django.urls import path
from .views import*
from .views import index_list
from django.urls import  include
from django.conf import settings



urlpatterns = [
	path('', index_list, name = 'index_list_url'),
	path('contact/thanks/', thanks, name = 'thanks_url'),
	path('zakazat/prodvizhenie-sajta/verify/', verify, name = 'verify_url'),
	path('contact/', contactView, name = 'contact_me_url'),
	path('author/', author, name = 'author_url'),
	path('sitemap/', sitemap, name = 'sitemap_url'),
	path('robots.txt/', robots, name = 'robots_url'),
	path('seo/', seo_list, name = 'seo_list_url'),
	path('seo/bystroe-prodvizhenie-sajta/', seo_one_one, name = 'seo_one_one_url'),
	path('seo/sekret-uspeshnogo-seo-prodvizheniya-sajtov/', seo_one_two, name = 'seo_one_two_url'),
	path('seo/top-4-shaga-dlya-prodvizheniya-v-youtube/', seo_one_three, name = 'seo_one_three_url'),
	path('seo/5-shagov-dlya-napisaniya-effektivnogo-teksta-kontent-marketinga/', seo_one_seven, name = 'seo_one_seven_url'),
	path('seo/kak-uvelichit-trafik-na-175-procentov/', seo_one_nine, name = 'seo_one.nine_url'),
	path('zakazat/', zakazat, name = 'zakazat_url'),
	path('zakazat/semanticheskoe-ydro/', semantika, name = 'semantika_url'),
	path('zakazat/seo-prodvijenie/', seo_prodvijenie, name = 'seo_prodvijenie_url'),
	path('zakazat/seo-prodvijenie/', seo_prodvijenie_after_Submit, name = 'seo_prodvijenie_after_Submit_url'),
	path('zakazat/prodvizhenie-sajta/', prodvizhenie_sajta, name = 'prodvizhenie_sajta_url'),
	path('zakazat/prodvizhenie-sajta/', prodvizhenie_sajta_after_Submit, name = 'prodvizhenie_sajta_after_Submit_url'),
	# path('prodvizhenie-sajta/', prodvizhenie_saita, name = 'seo_zakazat_prodvizhenie_url'),
	# path('prodvizhenie-sajta/zakazat-seo/', zakazat_seo, name = 'zakazat_seo_url'),
]

