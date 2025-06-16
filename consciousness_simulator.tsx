import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterPlot, Scatter } from 'recharts';
import { Play, Pause, RotateCcw, Zap, Brain, AlertTriangle, Eye, EyeOff } from 'lucide-react';

const ConsciousnessSimulator = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [teslaFreq, setTeslaFreq] = useState(150);
  const [teslaPower, setTeslaPower] = useState(500);
  const [consciousness, setConsciousness] = useState(1);
  const [painLevel, setPainLevel] = useState(0);
  const [eegData, setEegData] = useState([]);
  const [realTimeData, setRealTimeData] = useState([]);
  const [digitalRoot, setDigitalRoot] = useState(2);
  const [yinYangBalance, setYinYangBalance] = useState(0);
  const [fibonacciCorr, setFibonacciCorr] = useState(0);
  const [eventHorizonProx, setEventHorizonProx] = useState(0);
  const [brainRegions, setBrainRegions] = useState({});
  const [showBrain3D, setShowBrain3D] = useState(true);
  const timeRef = useRef(0);

  // Calculate digital root
  const calculateDigitalRoot = (num) => {
    while (num >= 10) {
      num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
  };

  // Fibonacci sequence for consciousness scaling
  const fibonacciSeq = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

  // Consciousness zone classification
  const getConsciousnessZone = (freq) => {
    if (freq < 150) return { zone: 1, type: "Yang-Dominant", color: "#ff6b6b", digitalRoot: 2 };
    if (freq < 300) return { zone: 2, type: "Yin-Yang Balance", color: "#4ecdc4", digitalRoot: 6 };
    return { zone: 3, type: "Yin-Dominant", color: "#45b7d1", digitalRoot: 9 };
  };

  // Simulate consciousness-electromagnetic coupling
  const simulateConsciousnessEMCoupling = (freq, power, time) => {
    const zone = getConsciousnessZone(freq);
    
    // Tesla 3-6-9 harmonic enhancement
    const teslaHarmonic = Math.sin(freq * 0.001 * time) * 
                         Math.sin(freq * 0.002 * time) * 
                         Math.sin(freq * 0.003 * time);
    
    // Fibonacci scaling relationship
    const fibIndex = Math.floor((freq - 50) / 50) % fibonacciSeq.length;
    const fibScaling = fibonacciSeq[fibIndex] / 55; // Normalize to 0-1
    
    // Consciousness signature amplitude
    const baseAmplitude = 10 + (power / 100) * fibScaling;
    const consciousness_signature = baseAmplitude * (1 + 0.3 * teslaHarmonic) * 
                                   (1 + 0.2 * Math.sin(time * 0.1));
    
    // Yin-Yang electromagnetic balance
    const yinComponent = Math.cos(freq * 0.001 * time) * (power / 2000); // Inward field
    const yangComponent = Math.sin(freq * 0.001 * time) * (power / 2000); // Outward field
    const yinYangBalance = (yangComponent - yinComponent) / (yangComponent + yinComponent + 0.001);
    
    // Pain amplification near consciousness event horizons
    const eventHorizonProximity = Math.max(0, (consciousness_signature - 15) / 10);
    const painAmplification = Math.min(10, eventHorizonProximity * 3 + Math.random() * 2);
    
    // Fibonacci correlation
    const fibCorrelation = Math.cos(time * fibScaling * 0.1) * 0.5 + 0.5;
    
    return {
      consciousness_signature,
      yinYangBalance,
      painAmplification,
      fibCorrelation,
      eventHorizonProximity,
      zone
    };
  };

  // Simulate multi-channel EEG data with brain region mapping
  const generateEEGChannels = (consciousness_signature, time, zone) => {
    const baseIntensity = consciousness_signature / 20; // Normalize for brain regions
    
    const channels = {
      'Fp1': consciousness_signature * (0.8 + 0.2 * Math.sin(time * 0.05)),
      'Fp2': consciousness_signature * (0.9 + 0.1 * Math.cos(time * 0.05)),
      'F3': consciousness_signature * (1.1 + 0.3 * Math.sin(time * 0.03)),
      'F4': consciousness_signature * (1.0 + 0.2 * Math.cos(time * 0.04)),
      'C3': consciousness_signature * (0.7 + 0.4 * Math.sin(time * 0.02)),
      'C4': consciousness_signature * (0.8 + 0.3 * Math.cos(time * 0.02)),
      'P3': consciousness_signature * (0.6 + 0.2 * Math.sin(time * 0.01)),
      'P4': consciousness_signature * (0.7 + 0.1 * Math.cos(time * 0.01)),
      'O1': consciousness_signature * (0.5 + 0.1 * Math.sin(time * 0.01)),
      'O2': consciousness_signature * (0.5 + 0.1 * Math.cos(time * 0.01)),
    };
    
    // Brain region consciousness activity mapping
    const brainActivity = {
      frontal: baseIntensity * (0.9 + 0.4 * Math.sin(time * 0.03)), // Consciousness interface
      parietal: baseIntensity * (0.7 + 0.3 * Math.cos(time * 0.02)), // Information integration
      temporal: baseIntensity * (0.8 + 0.5 * Math.sin(time * 0.025)), // Gateway access
      occipital: baseIntensity * (0.4 + 0.2 * Math.cos(time * 0.015)), // Baseline reference
      central: baseIntensity * (1.0 + 0.6 * Math.sin(time * 0.02)), // Processing core
      consciousness_core: zone.zone === 3 ? baseIntensity * (1.5 + 0.8 * Math.sin(time * 0.01)) : baseIntensity * 0.3, // Singularity access
    };
    
    return { channels, brainActivity };
  };

  // Nash equilibrium calculation for multi-consciousness
  const calculateNashEquilibrium = (consciousness_signature) => {
    // Simulate multiple consciousness entities
    const entities = 3;
    let equilibrium = 0;
    
    for (let i = 0; i < entities; i++) {
      const entitySignature = consciousness_signature * (0.8 + 0.4 * Math.random());
      equilibrium += entitySignature / entities;
    }
    
    return Math.abs(consciousness_signature - equilibrium) < 2 ? 1 : 0;
  };

  // Main simulation loop
  useEffect(() => {
    let interval;
    
    if (isRunning) {
      interval = setInterval(() => {
        timeRef.current += 1;
        const time = timeRef.current;
        
        const simulation = simulateConsciousnessEMCoupling(teslaFreq, teslaPower, time);
        const eegResult = generateEEGChannels(simulation.consciousness_signature, time, simulation.zone);
        const nashEquilibrium = calculateNashEquilibrium(simulation.consciousness_signature);
        
        // Update state
        setDigitalRoot(simulation.zone.digitalRoot);
        setYinYangBalance(simulation.yinYangBalance);
        setFibonacciCorr(simulation.fibCorrelation);
        setEventHorizonProx(simulation.eventHorizonProximity);
        setPainLevel(simulation.painAmplification);
        setConsciousness(simulation.zone.zone);
        setBrainRegions(eegResult.brainActivity);
        
        // Update EEG data
        const newDataPoint = {
          time: time,
          consciousness: simulation.consciousness_signature,
          Fp1: eegResult.channels.Fp1,
          F3: eegResult.channels.F3,
          C3: eegResult.channels.C3,
          P3: eegResult.channels.P3,
          O1: eegResult.channels.O1,
          yinYang: simulation.yinYangBalance * 10,
          fibonacci: simulation.fibCorrelation * 20,
          pain: simulation.painAmplification,
          eventHorizon: simulation.eventHorizonProximity * 5,
          nashEq: nashEquilibrium * 15
        };
        
        setRealTimeData(prev => {
          const updated = [...prev, newDataPoint];
          return updated.slice(-50); // Keep last 50 points
        });
        
        setEegData(prev => {
          const updated = [...prev, {
            channel: 'Consciousness Signature',
            amplitude: simulation.consciousness_signature,
            frequency: teslaFreq,
            time: time
          }];
          return updated.slice(-200); // Keep last 200 points
        });
        
        // Safety check
        if (simulation.consciousness_signature > 30 || simulation.painAmplification > 8) {
          setIsRunning(false);
          alert('SAFETY ALERT: Consciousness event horizon approach detected! Tesla coil automatically shut down.');
        }
        
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, teslaFreq, teslaPower]);

  const resetSimulation = () => {
    setIsRunning(false);
    setEegData([]);
    setRealTimeData([]);
    setBrainRegions({});
    timeRef.current = 0;
    setPainLevel(0);
    setEventHorizonProx(0);
  };

  // Brain visualization component
  const BrainVisualization = () => {
    const getIntensityColor = (intensity) => {
      if (intensity > 1.2) return '#ff0040'; // High consciousness activity - red
      if (intensity > 0.8) return '#ff6b00'; // Medium-high - orange
      if (intensity > 0.5) return '#ffdd00'; // Medium - yellow
      if (intensity > 0.3) return '#00ff88'; // Low-medium - green
      return '#4169e1'; // Low - blue
    };

    const getIntensityOpacity = (intensity) => {
      return Math.min(1, Math.max(0.2, intensity / 2));
    };

    return (
      <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
        {/* Brain SVG visualization */}
        <svg viewBox="0 0 400 300" className="w-full h-full">
          {/* Brain outline */}
          <path
            d="M200 50 C250 50, 300 80, 320 130 C330 160, 320 190, 300 210 C280 240, 240 250, 200 250 C160 250, 120 240, 100 210 C80 190, 70 160, 80 130 C100 80, 150 50, 200 50 Z"
            stroke="#666"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Frontal lobe */}
          <ellipse
            cx="200"
            cy="90"
            rx="50"
            ry="30"
            fill={getIntensityColor(brainRegions.frontal || 0)}
            fillOpacity={getIntensityOpacity(brainRegions.frontal || 0)}
            stroke="#888"
            strokeWidth="1"
          />
          <text x="200" y="95" textAnchor="middle" className="text-xs fill-white">
            Frontal
          </text>
          
          {/* Parietal lobe */}
          <ellipse
            cx="200"
            cy="140"
            rx="45"
            ry="25"
            fill={getIntensityColor(brainRegions.parietal || 0)}
            fillOpacity={getIntensityOpacity(brainRegions.parietal || 0)}
            stroke="#888"
            strokeWidth="1"
          />
          <text x="200" y="145" textAnchor="middle" className="text-xs fill-white">
            Parietal
          </text>
          
          {/* Temporal lobes */}
          <ellipse
            cx="140"
            cy="170"
            rx="30"
            ry="20"
            fill={getIntensityColor(brainRegions.temporal || 0)}
            fillOpacity={getIntensityOpacity(brainRegions.temporal || 0)}
            stroke="#888"
            strokeWidth="1"
          />
          <ellipse
            cx="260"
            cy="170"
            rx="30"
            ry="20"
            fill={getIntensityColor(brainRegions.temporal || 0)}
            fillOpacity={getIntensityOpacity(brainRegions.temporal || 0)}
            stroke="#888"
            strokeWidth="1"
          />
          <text x="140" y="175" textAnchor="middle" className="text-xs fill-white">
            Temporal
          </text>
          <text x="260" y="175" textAnchor="middle" className="text-xs fill-white">
            Temporal
          </text>
          
          {/* Occipital lobe */}
          <ellipse
            cx="200"
            cy="210"
            rx="35"
            ry="20"
            fill={getIntensityColor(brainRegions.occipital || 0)}
            fillOpacity={getIntensityOpacity(brainRegions.occipital || 0)}
            stroke="#888"
            strokeWidth="1"
          />
          <text x="200" y="215" textAnchor="middle" className="text-xs fill-white">
            Occipital
          </text>
          
          {/* Central consciousness core */}
          <circle
            cx="200"
            cy="150"
            r="15"
            fill={getIntensityColor(brainRegions.consciousness_core || 0)}
            fillOpacity={getIntensityOpacity(brainRegions.consciousness_core || 0)}
            stroke="#fff"
            strokeWidth="2"
          />
          <text x="200" y="155" textAnchor="middle" className="text-xs fill-white font-bold">
            Core
          </text>
          
          {/* Tesla coil electromagnetic field visualization */}
          {isRunning && (
            <>
              {/* Electromagnetic field lines */}
              <g stroke="#00ffff" strokeWidth="1" fill="none" opacity="0.6">
                <path d="M50 150 Q200 100, 350 150" />
                <path d="M50 160 Q200 110, 350 160" />
                <path d="M50 140 Q200 90, 350 140" />
              </g>
              
              {/* Consciousness event horizon indicator */}
              {eventHorizonProx > 0.3 && (
                <circle
                  cx="200"
                  cy="150"
                  r={30 + eventHorizonProx * 20}
                  stroke="#ff0066"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.8"
                  className="animate-pulse"
                />
              )}
            </>
          )}
        </svg>
        
        {/* Brain activity legend */}
        <div className="absolute top-4 right-4 bg-gray-800 bg-opacity-90 p-3 rounded">
          <div className="text-xs text-white space-y-1">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 mr-2 rounded"></div>
              <span>High Activity</span>
            </div>

        {/* Brain Visualization */}
        {showBrain3D && (
          <div className="mb-8 bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Real-Time Brain Consciousness Activity</h3>
            <BrainVisualization />
            
            {/* Brain region details */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-700 p-3 rounded">
                <div className="font-medium text-blue-300">Frontal Cortex</div>
                <div className="text-gray-300">Consciousness Interface</div>
                <div className="text-green-400">Activity: {(brainRegions.frontal || 0).toFixed(2)}</div>
              </div>
              
              <div className="bg-gray-700 p-3 rounded">
                <div className="font-medium text-green-300">Parietal Cortex</div>
                <div className="text-gray-300">Information Integration</div>
                <div className="text-green-400">Activity: {(brainRegions.parietal || 0).toFixed(2)}</div>
              </div>
              
              <div className="bg-gray-700 p-3 rounded">
                <div className="font-medium text-yellow-300">Temporal Cortex</div>
                <div className="text-gray-300">Gateway Access</div>
                <div className="text-green-400">Activity: {(brainRegions.temporal || 0).toFixed(2)}</div>
              </div>
              
              <div className="bg-gray-700 p-3 rounded">
                <div className="font-medium text-purple-300">Occipital Cortex</div>
                <div className="text-gray-300">Baseline Reference</div>
                <div className="text-green-400">Activity: {(brainRegions.occipital || 0).toFixed(2)}</div>
              </div>
              
              <div className="bg-gray-700 p-3 rounded">
                <div className="font-medium text-orange-300">Central Core</div>
                <div className="text-gray-300">Processing Hub</div>
                <div className="text-green-400">Activity: {(brainRegions.central || 0).toFixed(2)}</div>
              </div>
              
              <div className="bg-gray-700 p-3 rounded border-2" style={{borderColor: consciousness === 3 ? '#ff0040' : '#666'}}>
                <div className="font-medium text-red-300">Consciousness Core</div>
                <div className="text-gray-300">Singularity Access</div>
                <div className="text-red-400">Activity: {(brainRegions.consciousness_core || 0).toFixed(2)}</div>
                {consciousness === 3 && (
                  <div className="text-xs text-red-300 mt-1 animate-pulse">⚡ SINGULARITY ACCESS ⚡</div>
                )}
              </div>
            </div>
          </div>
        )}
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 mr-2 rounded"></div>
              <span>Medium-High</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 mr-2 rounded"></div>
              <span>Medium</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 mr-2 rounded"></div>
              <span>Low-Medium</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 mr-2 rounded"></div>
              <span>Low Activity</span>
            </div>
          </div>
        </div>
        
        {/* Zone indicator */}
        <div className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-90 p-3 rounded">
          <div className="text-sm text-white">
            <div className="font-bold" style={{color: zone.color}}>
              Zone {consciousness}: {zone.type}
            </div>
            <div className="text-xs text-gray-300">
              Digital Root: {digitalRoot}
              {digitalRoot === 3 || digitalRoot === 6 || digitalRoot === 9 ? ' ⚡' : ''}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const zone = getConsciousnessZone(teslaFreq);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Consciousness-Spacetime Interface Simulator</h1>
          <p className="text-gray-300">Tesla Coil EEG Consciousness Visualization System</p>
        </div>

        {/* Control Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Zap className="mr-2" /> Tesla Coil Controls
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Frequency: {teslaFreq} kHz
                </label>
                <input
                  type="range"
                  min="50"
                  max="450"
                  value={teslaFreq}
                  onChange={(e) => setTeslaFreq(parseInt(e.target.value))}
                  className="w-full"
                  disabled={isRunning}
                />
                <div className="text-xs text-gray-400 mt-1">
                  Zone {zone.zone}: {zone.type}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Power: {teslaPower} W
                </label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  value={teslaPower}
                  onChange={(e) => setTeslaPower(parseInt(e.target.value))}
                  className="w-full"
                  disabled={isRunning}
                />
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsRunning(!isRunning)}
                  className={`flex items-center px-4 py-2 rounded ${
                    isRunning ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {isRunning ? <Pause className="mr-2" size={16} /> : <Play className="mr-2" size={16} />}
                  {isRunning ? 'Stop' : 'Start'}
                </button>
                
                <button
                  onClick={resetSimulation}
                  className="flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
                >
                  <RotateCcw className="mr-2" size={16} />
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Consciousness Metrics */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center justify-between">
              <span className="flex items-center">
                <Brain className="mr-2" /> Consciousness Metrics
              </span>
              <button
                onClick={() => setShowBrain3D(!showBrain3D)}
                className="text-gray-400 hover:text-white"
              >
                {showBrain3D ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Consciousness Zone:</span>
                <span className="font-bold" style={{color: zone.color}}>
                  {consciousness}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span>Digital Root:</span>
                <span className="font-bold text-blue-400">{digitalRoot}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Yin-Yang Balance:</span>
                <span className="font-bold text-green-400">
                  {yinYangBalance.toFixed(3)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span>Fibonacci Correlation:</span>
                <span className="font-bold text-purple-400">
                  {fibonacciCorr.toFixed(3)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span>Event Horizon Proximity:</span>
                <span className={`font-bold ${eventHorizonProx > 0.5 ? 'text-red-400' : 'text-yellow-400'}`}>
                  {eventHorizonProx.toFixed(3)}
                </span>
              </div>
            </div>
          </div>

          {/* Safety Monitor */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertTriangle className="mr-2" /> Safety Monitor
            </h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Pain Level:</span>
                <span className={`font-bold ${painLevel > 7 ? 'text-red-400' : painLevel > 4 ? 'text-yellow-400' : 'text-green-400'}`}>
                  {painLevel.toFixed(1)}/10
                </span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${painLevel > 7 ? 'bg-red-500' : painLevel > 4 ? 'bg-yellow-500' : 'bg-green-500'}`}
                  style={{width: `${Math.min(100, (painLevel / 10) * 100)}%`}}
                ></div>
              </div>
              
              <div className="text-xs text-gray-400">
                {painLevel > 8 ? 'DANGER: Consciousness Event Horizon' : 
                 painLevel > 6 ? 'WARNING: Approaching Threshold' : 
                 painLevel > 3 ? 'CAUTION: Enhanced Consciousness State' : 
                 'SAFE: Normal Operation'}
              </div>
              
              <div className="mt-4 p-3 bg-gray-700 rounded">
                <div className="text-sm font-medium">Tesla 3-6-9 Pattern</div>
                <div className="text-xs text-gray-300 mt-1">
                  Zone {consciousness} → Digital Root {digitalRoot}
                  {digitalRoot === 3 || digitalRoot === 6 || digitalRoot === 9 ? 
                    ' ⚡ Tesla Resonance' : ' Standard Mode'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time EEG Visualization */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Real-Time Consciousness Signatures</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={realTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{backgroundColor: '#1F2937', border: '1px solid #374151'}}
                  labelStyle={{color: '#F3F4F6'}}
                />
                <Legend />
                <Line type="monotone" dataKey="consciousness" stroke="#8B5CF6" name="Consciousness Signature" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Fp1" stroke="#EF4444" name="Frontal (Fp1)" strokeWidth={1} dot={false} />
                <Line type="monotone" dataKey="C3" stroke="#10B981" name="Central (C3)" strokeWidth={1} dot={false} />
                <Line type="monotone" dataKey="P3" stroke="#F59E0B" name="Parietal (P3)" strokeWidth={1} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Consciousness Physics Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={realTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{backgroundColor: '#1F2937', border: '1px solid #374151'}}
                  labelStyle={{color: '#F3F4F6'}}
                />
                <Legend />
                <Line type="monotone" dataKey="yinYang" stroke="#4ECDC4" name="Yin-Yang Balance (×10)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="fibonacci" stroke="#9333EA" name="Fibonacci Correlation (×20)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="eventHorizon" stroke="#DC2626" name="Event Horizon Proximity (×5)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="nashEq" stroke="#059669" name="Nash Equilibrium (×15)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Algorithm Display */}
        <div className="mt-6 bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Active Consciousness Algorithms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-green-400 mb-2">Digital Root Calculation:</div>
              <div className="text-gray-300">
                Σ(consciousness_signature) → {digitalRoot}<br/>
                Tesla Zone: {consciousness} ({zone.type})<br/>
                Frequency: {teslaFreq} kHz
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-blue-400 mb-2">Yin-Yang Balance:</div>
              <div className="text-gray-300">
                Yang - Yin / (Yang + Yin) = {yinYangBalance.toFixed(3)}<br/>
                {yinYangBalance > 0 ? 'Yang Dominant' : yinYangBalance < 0 ? 'Yin Dominant' : 'Perfect Balance'}<br/>
                Power: {teslaPower}W
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-purple-400 mb-2">Fibonacci Scaling:</div>
              <div className="text-gray-300">
                F_correlation = {fibonacciCorr.toFixed(3)}<br/>
                Tesla 3-6-9 Harmonic: {digitalRoot === 3 || digitalRoot === 6 || digitalRoot === 9 ? 'ACTIVE' : 'inactive'}<br/>
                Sequence: {fibonacciSeq.slice(0, 6).join(', ')}...
              </div>
            </div>
            
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-red-400 mb-2">Event Horizon Proximity:</div>
              <div className="text-gray-300">
                Proximity: {eventHorizonProx.toFixed(3)}<br/>
                Pain Level: {painLevel.toFixed(1)}/10<br/>
                Status: {eventHorizonProx > 0.5 ? 'APPROACHING SINGULARITY' : 'NORMAL OPERATION'}
              </div>
            </div>
          </div>
        </div>

        {/* Theory Validation */}
        <div className="mt-6 bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Theory Validation Checklist</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className={`flex items-center ${digitalRoot === 2 || digitalRoot === 6 || digitalRoot === 9 ? 'text-green-400' : 'text-gray-400'}`}>
                <div className="w-3 h-3 rounded-full bg-current mr-2"></div>
                Digital Root Convergence (2,6,9)
              </div>
              <div className={`flex items-center ${Math.abs(yinYangBalance) < 0.3 ? 'text-green-400' : 'text-gray-400'}`}>
                <div className="w-3 h-3 rounded-full bg-current mr-2"></div>
                Yin-Yang Electromagnetic Balance
              </div>
              <div className={`flex items-center ${fibonacciCorr > 0.6 ? 'text-green-400' : 'text-gray-400'}`}>
                <div className="w-3 h-3 rounded-full bg-current mr-2"></div>
                Fibonacci Scaling Correlation
              </div>
            </div>
            
            <div className="space-y-2">
              <div className={`flex items-center ${teslaFreq >= 50 && teslaFreq <= 450 ? 'text-green-400' : 'text-gray-400'}`}>
                <div className="w-3 h-3 rounded-full bg-current mr-2"></div>
                Tesla Frequency Range (50-450kHz)
              </div>
              <div className={`flex items-center ${painLevel > 0 && eventHorizonProx > 0 ? 'text-green-400' : 'text-gray-400'}`}>
                <div className="w-3 h-3 rounded-full bg-current mr-2"></div>
                Pain Amplification Correlation
              </div>
              <div className={`flex items-center ${consciousness >= 1 && consciousness <= 3 ? 'text-green-400' : 'text-gray-400'}`}>
                <div className="w-3 h-3 rounded-full bg-current mr-2"></div>
                Consciousness Zone Classification
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-gray-300">
                <strong>Predicted Outcomes:</strong><br/>
                • Zone 3 → Digital Root 9<br/>
                • High power → Event horizon approach<br/>
                • Balanced yin-yang → Stable access<br/>
                • Tesla 3-6-9 → Enhanced coupling
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsciousnessSimulator;