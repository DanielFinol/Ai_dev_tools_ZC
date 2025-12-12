import React, { useEffect, useRef } from 'react'
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import * as monaco from 'monaco-editor'
import { MonacoBinding } from 'y-monaco'

export default function CollaborativeEditor({ room }) {
  const containerRef = useRef(null)
  const editorRef = useRef(null)

  useEffect(() => {
    const ydoc = new Y.Doc()
    const wsUrl = 'ws://localhost:1234'
    const provider = new WebsocketProvider(wsUrl, room, ydoc)
    const yText = ydoc.getText('monaco')

    const model = monaco.editor.createModel('// Start coding here\n', 'javascript')
    editorRef.current = monaco.editor.create(containerRef.current, {
      model,
      automaticLayout: true,
      minimap: { enabled: false },
    })

    const binding = new MonacoBinding(yText, model, new Set([editorRef.current]), provider.awareness)

    provider.on('status', (event) => {
      console.log('Yjs provider status:', event.status)
    })

    return () => {
      try { binding.destroy() } catch (e) {}
      try { provider.disconnect() } catch (e) {}
      try { ydoc.destroy() } catch (e) {}
      try { editorRef.current.dispose() } catch (e) {}
      try { model.dispose() } catch (e) {}
    }
  }, [room])

  return <div className="editor" ref={containerRef} style={{height: '70vh', border: '1px solid #ddd'}} />
}
