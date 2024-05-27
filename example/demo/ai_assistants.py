from django_ai_assistant.ai.assistant import register_assistant

from .weather import fetch_current_weather, fetch_forecast_weather


@register_assistant
class WeatherAIAssistant:
    name = "Weather Assistant"
    instructions = "You are a weather bot. Use the provided functions to answer questions."
    fns = (fetch_current_weather, fetch_forecast_weather)
    model = "gpt-4o"