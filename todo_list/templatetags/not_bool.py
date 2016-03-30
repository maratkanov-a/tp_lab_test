from django import template

register = template.Library()


@register.filter(name='opp')
def opp(value):
    return not value
