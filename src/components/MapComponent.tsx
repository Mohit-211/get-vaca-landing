import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, AlertCircle } from 'lucide-react';

interface MapComponentProps {
  location: string;
  latitude?: number;
  longitude?: number;
}

const MapComponent = ({ location, latitude = 36.4618, longitude = 25.3753 }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [mapError, setMapError] = useState(false);

  const initializeMap = async (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      // Dynamically import mapbox-gl
      const mapboxgl = await import('mapbox-gl');
      
      // Set access token
      mapboxgl.default.accessToken = token;
      
      // Initialize map
      map.current = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [longitude, latitude],
        zoom: 14,
        interactive: true,
      });

      // Add marker
      new mapboxgl.default.Marker({
        color: '#1e40af'
      })
        .setLngLat([longitude, latitude])
        .setPopup(
          new mapboxgl.default.Popup().setHTML(`<h3 class="font-semibold">${location}</h3>`)
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

      setMapError(false);
      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
      setMapError(true);
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  if (showTokenInput || mapError) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Property Location
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mapError && (
              <div className="flex items-center gap-2 p-3 bg-destructive/10 text-destructive rounded-lg">
                <AlertCircle className="h-4 w-4" />
                <span className="text-sm">Failed to load map. Please check your token.</span>
              </div>
            )}
            
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                To display the interactive map, please enter your Mapbox public token:
              </p>
              <div className="flex gap-2">
                <Input
                  type="password"
                  placeholder="Enter Mapbox public token"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleTokenSubmit} disabled={!mapboxToken.trim()}>
                  Load Map
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get your token at{' '}
                <a 
                  href="https://mapbox.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ocean hover:underline"
                >
                  mapbox.com
                </a>
              </p>
            </div>
            
            {/* Fallback location info */}
            <div className="mt-6 p-4 bg-sand rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-ocean" />
                <span className="font-medium">Property Location</span>
              </div>
              <p className="text-muted-foreground">{location}</p>
              <p className="text-sm text-muted-foreground mt-1">
                Coordinates: {latitude}, {longitude}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          Property Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          
          <div 
            ref={mapContainer} 
            className="w-full h-64 rounded-lg shadow-sm border"
            style={{ minHeight: '256px' }}
          />
          
          <p className="text-xs text-muted-foreground">
            Interactive map showing exact property location with nearby amenities and attractions.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapComponent;