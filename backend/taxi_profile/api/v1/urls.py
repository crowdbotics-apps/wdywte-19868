from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    DocumentViewSet,
    UserProfileViewSet,
    DriverProfileViewSet,
    InviteCodeViewSet,
    NotificationViewSet,
)

router = DefaultRouter()
router.register("driverprofile", DriverProfileViewSet)
router.register("document", DocumentViewSet)
router.register("notification", NotificationViewSet)
router.register("invitecode", InviteCodeViewSet)
router.register("userprofile", UserProfileViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
