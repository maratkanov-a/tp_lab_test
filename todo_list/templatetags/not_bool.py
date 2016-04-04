import datetime
from django import template

register = template.Library()


@register.filter(name='opp')
def opp(value):
    return not value


@register.filter(name='fix_time')
def fix_time(time):
    return time.replace(tzinfo=None)


@register.filter(name='nex_day_time')
def nex_day_time(time):
    return datetime.datetime.utcnow() + datetime.timedelta(days=1)


