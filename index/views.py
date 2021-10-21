from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpResponseRedirect #используется для возврата на страницу после отправки формы
from django.urls import reverse #используется для возврата на страницу после отправки формы
from django.views.generic import View
from django.core.mail import send_mail, BadHeaderError
from django import forms
from django.shortcuts import redirect
# Create your views here.

class ContactForm(forms.Form):
	subject = forms.CharField(max_length = 30)
	sender = forms.EmailField()
	message = forms.CharField()

class ContactFormShort(forms.Form):
	name = forms.CharField(max_length = 30)
	phone = forms.CharField(max_length = 18)
# def callMeBack(request):
# 	if request.method == 'POST':
# 		form = ContactFormShort(request.POST)
# 		#Если форма заполнена корректно, сохраняем все введённые пользователем значения
# 		if form.is_valid():
# 			name = form.cleaned_data['name']
# 			phone = form.cleaned_data['phone']
# 			recipient_list = ['mail@webanatomia.ru']
# 			# mail@webanatomia.ru'
# 			# mail = send_mail(name, middlename, sender, message, from_email, recipient_list)
# 			# addsender = message + " адрес эл.почты:" + str(sender)

# 			try:
# 				send_mail(name, phone, 'webanatomia@mail.ru', recipient_list)
# 			except BadHeaderError: #Защита от уязвимости
# 				return HttpResponse('Invalid header found')
# 			#Переходим на другую страницу, если сообщение отправлено
# 			return render(request, 'blog/thanks.html')
		
# 	# else:
# 	# 	#Заполняем форму
# 	# 	form = ContactForm()
	
# 	# return render(request, 'blog/contact.html')
def contactView(request):
	if request.method == 'POST':
		form = ContactForm(request.POST)
		#Если форма заполнена корректно, сохраняем все введённые пользователем значения
		if form.is_valid():
			subject = form.cleaned_data['subject']
			sender = form.cleaned_data['sender']
			message = form.cleaned_data['message']
			recipient_list = ['mail@webanatomia.ru']
			# mail@webanatomia.ru'
			# mail = send_mail(name, middlename, sender, message, from_email, recipient_list)
			addsender = message + " адрес эл.почты:" + str(sender)

			try:
				send_mail(subject, addsender, 'webanatomia@mail.ru', recipient_list)
			except BadHeaderError: #Защита от уязвимости
				return HttpResponse('Invalid header found')
			#Переходим на другую страницу, если сообщение отправлено
			return render(request, 'blog/thanks.html')
		
	else:
		#Заполняем форму
		form = ContactForm()
	
	return render(request, 'blog/contact.html')

def index_list (request):
	
	return render(request, 'blog/index.html')

def contact_me (request):
	return render(request, 'blog/contact.html')

def thanks (request):
	return render(request, 'blog/thanks.html')

def verify (request):
	return render(request, 'blog/verify.html')

def author (request):
	return render(request, 'blog/author.html')
def sitemap (request):
	return render(request, 'blog/sitemap.xml')
def robots (request):
	return render(request, 'blog/robots.txt')




def seo_list (request):
	return render(request, 'blog/seo.html')

def seo_one_one (request):
	return render(request, 'blog/bystroe-prodvizhenie-sajta.html')

def seo_one_two (request):
	return render(request, 'blog/sekret-uspeshnogo-seo-prodvizheniya-sajtov.html')

def seo_one_three (request):
	return render(request, 'blog/top-4-shaga-dlya-prodvizheniya-v-youtube.html')

def seo_one_seven (request):
	return render(request, 'blog/5-shagov-dlya-napisaniya-effektivnogo-teksta-kontent-marketinga.html')
	

def seo_one_nine (request):
	return render(request, 'blog/kak-uvelichit-trafik-na-175-procentov.html')


def zakazat (request):
	return render(request, 'blog/zakazat.html')

def semantika (request):
	return render(request, 'blog/semanticheskoe-ydro.html')

def seo_prodvijenie (request):
	if request.method == 'POST':
		form = ContactFormShort(request.POST)
		#Если форма заполнена корректно, сохраняем все введённые пользователем значения
		if form.is_valid():
			subject = "ЗАКАЗАН ОБРАТНЫЙ ЗВОНОК ПО SEO"
			name = form.cleaned_data['name']
			phone = form.cleaned_data['phone']
			recipient_list = ['mail@webanatomia.ru']
			addsender = "Контактное лицо: " + name + "\n" + "Номер телефона: " + str(phone)
			try:
				send_mail(subject, addsender,  'webanatomia@mail.ru', recipient_list) #первым аргументом (чтобы не указывал) всегда будет идти "предмет письма" 
			except BadHeaderError: #Защита от уязвимости
				return HttpResponse('Invalid header found')
			#Переходим на другую страницу, если сообщение отправлено
			return render(request, 'blog/verify-seo.html') #рабочий этот вариант
			# return HttpResponseRedirect(reverse(prodvizhenie_sajta_after_Submit))
			# return HttpResponseRedirect("{% url 'zakazat_seo_url' %}")
			# return redirect ('blog/prodvizhenie-sajta.html')
	else:
		#Заполняем форму
		form = ContactFormShort()
	return render(request, 'blog/seo-prodvijenie.html')

def seo_prodvijenie_after_Submit (request):
	return render(request, 'blog/seo-prodvijenie.html')


def prodvizhenie_sajta (request):
	if request.method == 'POST':
		form = ContactFormShort(request.POST)
		#Если форма заполнена корректно, сохраняем все введённые пользователем значения
		if form.is_valid():
			subject = "ЗАКАЗАН ОБРАТНЫЙ ЗВОНОК по КОНТЕКСТНОЙ РЕКЛАМЕ"
			name = form.cleaned_data['name']
			phone = form.cleaned_data['phone']
			recipient_list = ['mail@webanatomia.ru']
			addsender = "Контактное лицо: " + name + "\n" + "Номер телефона: " + str(phone)
			try:
				send_mail(subject, addsender,  'webanatomia@mail.ru', recipient_list) #первым аргументом (чтобы не указывал) всегда будет идти "предмет письма" 
			except BadHeaderError: #Защита от уязвимости
				return HttpResponse('Invalid header found')
			#Переходим на другую страницу, если сообщение отправлено
			return render(request, 'blog/verify.html') #рабочий этот вариант
			# return HttpResponseRedirect(reverse(prodvizhenie_sajta_after_Submit))
			# return HttpResponseRedirect("{% url 'zakazat_seo_url' %}")
			# return redirect ('blog/prodvizhenie-sajta.html')
	else:
		#Заполняем форму
		form = ContactFormShort()
	return render(request, 'blog/prodvizhenie-sajta.html')

def prodvizhenie_sajta_after_Submit (request):
	return render(request, 'blog/prodvizhenie-sajta.html')

	
	