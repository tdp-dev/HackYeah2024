#!/bin/sh

/pb/pocketbase migrate && /pb/pocketbase serve --http=0.0.0.0:8080
