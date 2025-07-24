#!/bin/bash
echo "Cleaning cache..."
rm -rf .next
rm -rf node_modules/.cache

echo "Starting Pro Plumbers website..."
echo ""
echo "Once started, open your browser to:"
echo "- http://localhost:3000 (Homepage)"
echo "- http://localhost:3000/test (CSS Test Page)"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev